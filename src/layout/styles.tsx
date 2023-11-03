import styled from "@emotion/styled";

const LayoutWrapper = styled.div`
  label: app-wrapper;
  display: flex;
  width: 100%;
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    flex: 1;
  }
  .ps-sidebar-root {
    height: 100vh;
  }
  &.empty {
    min-height: auto;
    height: 100vh;
    overflow: hidden;
  }
`;

export default LayoutWrapper;
