import styled from "@emotion/styled";

const LayoutWrapper = styled.div`
  label: app-wrapper;
  display: flex;
  flex-direction: column;
  width: 100%;
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 62px);
    flex: 1;
  }
  &.empty {
    min-height: auto;
    height: 100vh;
    overflow: hidden;
  }
`;

export default LayoutWrapper;
