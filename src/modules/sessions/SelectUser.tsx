import React from "react";
import loGet from "lodash/get";
import { useTheme } from "@emotion/react";
import {
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { showError } from "@/state/ui-actions/slice";
import { formDataHandler } from "@/helpers/functions";
import { Select, TextInput, EmailInput, ImageInput } from "@/components/Inputs";
import { useAxiosInstance, useAppDispatch } from "@/hooks";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import { P1, P3 } from "@/components/Typography";

import AsyncLabel from "@/components/Inputs/AsyncLabel";
import { Flex } from "@/components/Grids";
import Form from "@/components/Form";
import { Button } from "@/components/Buttons";
import { isArray } from "lodash";

type SelectUserProps = {
  name: string;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
  watch: UseFormWatch<any>;
  error?: string;
  label?: string;
  placeholder?: string;
};

export default function SelectUser({
  name,
  label,
  placeholder,
  register,
  setValue,
  getValues,
  watch,
  error,
}: SelectUserProps) {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const { colors } = useTheme();
  const { get, post } = useAxiosInstance();
  const dispatch = useAppDispatch();

  const selectedUsers = getValues(name);

  const onSubmitAddUser = React.useCallback(
    async (data: any) => {
      setSubmitting(true);
      try {
        const response = await post(
          "/create-users",
          formDataHandler({
            ...data,
            image: data.image[0],
            event_id: 19,
          })
        );
        if (selectedUsers) {
          setValue(name, [...selectedUsers, response.data.id]);
        } else {
          setValue(name, [response.data.id]);
        }
      } catch (err) {
        dispatch(showError("something went wrong please try again later"));
      } finally {
        setSubmitting(false);
        setOpenModal(false);
      }
    },
    [dispatch, name, post, selectedUsers, setValue]
  );

  const optionGenerator = React.useCallback(
    (users: any[]) => {
      return [
        {
          label: (
            <Flex justify="space-between" align="center" fullWidth>
              <P3 text="Add new speaker" />
              <Icon name="plus" color={colors.pallet[0]} />
            </Flex>
          ),
          value: "add-user",
        },
        ...users.map((user: any) => ({
          label: (
            <AsyncLabel
              image={user.avatar}
              label={`${user.first_name} ${user.last_name}`}
            />
          ),
          stringLabel: `${user.first_name} ${user.last_name}`,
          value: user.id,
        })),
      ];
    },
    [colors]
  );
  const [users, setUsers] = React.useState<any>([]);

  const searchUsers = React.useCallback(
    async (inputValue: string) => {
      try {
        const response = await get(`/search-users`, {
          params: {
            event_id: 19,
            search: inputValue,
          },
        });
        const users = loGet(response, "data.users", []);
        const options = optionGenerator(users);
        return options;
      } catch (err) {
        dispatch(showError("something went wrong please try again later"));
        return [];
      }
    },
    [dispatch, get, optionGenerator]
  );

  const getUsers = React.useCallback(async () => {
    try {
      const response = await get(`/get-users`, {
        params: {
          event_id: 19,
        },
      });
      const users = loGet(response, "data.users", null);
      const options = optionGenerator(users);
      setUsers(options);
    } catch (err) {
      dispatch(showError("something went wrong please try again later"));
    } finally {
      setLoading(false);
    }
  }, [dispatch, get, optionGenerator]);

  React.useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isMulti = true;

  return (
    <Flex fullWidth>
      <Select
        register={register}
        setValue={setValue}
        watch={watch}
        isLoading={loading}
        label={label}
        placeholder={placeholder}
        name={name}
        options={users}
        onChange={(option) => {
          if (isMulti && isArray(option)) {
            if (option.map((opt) => opt.value).includes("add-user")) {
              setOpenModal(true);
            }
          } else if (!isArray(option)) {
            if (option.value === "add-user") setOpenModal(true);
          }
        }}
        searchHandler={searchUsers}
        isMulti={isMulti}
        required="this field is required"
        error={error}
      />
      <Modal open={openModal}>
        <Form>
          {({ control, watch, handleSubmit }) => (
            <Flex direction="column" gap="16px" fullWidth>
              <Flex mb="20px">
                <P1 text="Add speaker" />
              </Flex>
              <ImageInput
                setValue={setValue}
                label="Photo"
                name="image"
                control={control}
                watch={watch}
                variant="small"
              />
              <TextInput
                control={control}
                name="first_name"
                label="first name"
                required
              />
              <TextInput
                control={control}
                name="last_name"
                label="last name"
                required
              />
              <EmailInput
                control={control}
                name="email"
                label="email address"
                required
              />
              <Flex gap="16px" fullWidth>
                <Flex flex={1}>
                  <Button
                    type="button"
                    onClick={() => setOpenModal(false)}
                    fullWidth
                  >
                    Cancel
                  </Button>
                </Flex>
                <Flex flex={1}>
                  <Button
                    type="button"
                    onClick={handleSubmit(onSubmitAddUser)}
                    isLoading={submitting}
                    fullWidth
                  >
                    Add
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          )}
        </Form>
      </Modal>
    </Flex>
  );
}
