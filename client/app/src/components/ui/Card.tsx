import CardMui from "@material-ui/core/Card";
import styled from "@emotion/styled";
import { rhythm } from "src/utils/typography";

export const Card = styled(CardMui)`
  background-color: var(--light-navy) !important;
  border-radius: ${rhythm(0.5)};
`;

export default Card;
