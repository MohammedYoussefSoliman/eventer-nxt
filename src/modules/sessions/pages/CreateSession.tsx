import React from "react";
import loGet from "lodash/get";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { showError } from "@/state/ui-actions/slice";
import Spinner from "@/components/Spinner";
import {
  TextArea,
  TextInput,
  DatePicker,
  TimePicker,
  ImageInput,
} from "@/components/Inputs";
import { formDataHandler } from "@/helpers/functions";
import { Flex, Container } from "@/components/Grids";
import Form from "@/components/Form";
import { Button } from "@/components/Buttons";
import { Link } from "@/components/Links";
import { useAxiosInstance, useAppDispatch, useQuerySearch } from "@/hooks";
import { H5, P3 } from "@/components/Typography";
import Wrapper, { FormWrapper } from "../styles";
import { SessionType } from "../types";
import Icon from "@/components/Icon";
import SelectUser from "../SelectUser";

export default function CreateSession() {
  const dispatch = useAppDispatch();
  const { get, post } = useAxiosInstance();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const [session, setSession] = React.useState<any>(null);

  const { colors } = useTheme();
  const { sessionId } = useQuerySearch();
  const navigate = useNavigate();

  const getSession = React.useCallback(
    async (id: string) => {
      setLoading(true);
      try {
        const response = await get(`/session-details/${id}`, {
          params: {
            event_id: 19,
          },
        });
        setSession(loGet(response, "data", null));
        setLoading(false);
      } catch (err) {
        dispatch(showError("something went wrong please try again later"));
      }
    },
    [dispatch, get]
  );

  const onSubmit = React.useCallback(
    async (data: SessionType) => {
      console.log(data);
      setSubmitting(true);
      await post(
        "/create-sessions",
        formDataHandler({
          title: data.title,
          subtitle: data.subtitle,
          description: data.description,
          from: data.from,
          till: data.till,
          date: data.date,
          speaker_ids: JSON.stringify(data.speaker_ids),
          moderator_ids: JSON.stringify(data.moderator_ids),
          cover_image: loGet(data, "cover_image[0]"),
          event_id: 19,
        })
      );
      try {
      } catch (err) {
        dispatch(showError("something went wrong please try again later"));
      } finally {
        setSubmitting(false);
      }
    },
    [dispatch, post]
  );

  React.useEffect(() => {
    if (sessionId) {
      getSession(sessionId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  if (loading)
    return (
      <Wrapper
        direction="column"
        justify="center"
        align="center"
        fullHeight
        fullWidth
      >
        <Spinner />
      </Wrapper>
    );

  return (
    <Wrapper direction="column">
      <Form
        onSubmit={onSubmit}
        defaultValues={{
          ...session,
          speaker_ids: session?.speaker_ids,
          moderator_ids: session?.moderator_ids,
          event_id: 19,
        }}
      >
        {({
          control,
          getValues,
          setValue,
          watch,
          register,
          formState: { errors },
        }) => (
          <>
            <Flex
              pv="8px"
              pe="8px"
              fullWidth
              justify="space-between"
              align="center"
            >
              <Flex direction="column">
                <Link to="/sessions">
                  <Flex gap="4px" align="center">
                    <Icon name="chevron-left" />
                    <P3
                      text="all sessions"
                      color={colors.pallet[200]}
                      capitalizeFirstLetter
                    />
                  </Flex>
                </Link>
                <H5 text="new sessions" weight={400} />
              </Flex>
              <Flex>
                <Button type="button" onClick={() => navigate(-1)}>
                  cancel
                </Button>
                <Button isLoading={submitting} variant="secondary">
                  next
                </Button>
              </Flex>
            </Flex>
            <Container>
              <FormWrapper
                p={{ xs: 20, md: 40 }}
                mt={{ xs: 16 }}
                gap="32px"
                direction="column"
                fullWidth
              >
                <TextInput
                  control={control}
                  name="title"
                  label="Session title"
                  required
                />
                <TextInput
                  control={control}
                  name="subtitle"
                  label="Session subtitle"
                  required
                />
                <TextArea
                  control={control}
                  name="description"
                  label="Session description"
                  required
                />
                <Flex justify="space-between" gap="16px" fullWidth>
                  <DatePicker
                    control={control}
                    name="date"
                    label="Date"
                    required
                  />
                  <TimePicker
                    control={control}
                    name="from"
                    label="From"
                    required
                  />
                  <TimePicker
                    control={control}
                    name="till"
                    label="Till"
                    required
                  />
                </Flex>
                <ImageInput
                  control={control}
                  setValue={setValue}
                  watch={watch}
                  name="image_cover"
                  url={session?.cover_image}
                />
                <SelectUser
                  name="speaker_ids"
                  label="Speakers"
                  placeholder="Select speakers..."
                  watch={watch}
                  getValues={getValues}
                  setValue={setValue}
                  register={register}
                  error={loGet(errors, "speaker_ids")?.message}
                />
                <SelectUser
                  name="moderator_ids"
                  label="Moderators"
                  placeholder="Select moderators..."
                  setValue={setValue}
                  getValues={getValues}
                  register={register}
                  watch={watch}
                  error={loGet(errors, "speaker_ids")?.message}
                />
              </FormWrapper>
            </Container>
          </>
        )}
      </Form>
    </Wrapper>
  );
}
