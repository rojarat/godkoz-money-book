import React from "react";
import CustomCard from "src/components/ui/Card";
import {
  CardContent,
  Container,
  Grid,
  CardActions,
  Button,
} from "@material-ui/core/";
import styled from "@emotion/styled";
import { rhythm, scale } from "src/utils/typography";
import IconButton from "@material-ui/core/IconButton";
import {
  DeleteOutline as DeleteIcon,
  Edit as EditIcon,
} from "@material-ui/icons";
import Currency from "src/utils/currency";
import { css } from "@emotion/css";
export function ExpenseCard() {
  const ContainerCenter = styled(Container)``;
  const Card = styled(CustomCard)``;
  const Category = styled.h3`
    margin: 0;
    font-size: ${scale(1 / 6).fontSize};
    line-height: ${scale(1 / 6).lineHeight};
    color: var(--green);
  `;
  const ExpenseType = styled.h3`
    margin: 0;
    text-align: right;
    font-size: ${scale(1 / 6).fontSize};
    line-height: ${scale(1 / 6).lineHeight};
  `;
  const TypeExpendColor = css`
    color: var(--red);
  `;
  const TypeIncomeColor = css`
    color: var(--green);
  `;
  const Title = styled.h4`
    margin: ${rhythm(1.5)} 0px;
    font-size: ${scale(4 / 6).fontSize};
    line-height: ${scale(4 / 6).lineHeight};
  `;
  const Total = styled.h4`
    margin: ${rhythm(1.5)} 0px;
    text-align: right;
    font-size: ${scale(4.5 / 6).fontSize};
    line-height: ${scale(4.5 / 6).lineHeight};
  `;
  const Date = styled.h4`
    text-align: left;
    font-size: ${scale(1 / 6).fontSize};
    line-height: ${scale(1 / 6).lineHeight};
  `;
  const Mockdata = {
    expense_type: "expend",
  };
  return (
    <ContainerCenter maxWidth={"md"}>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={8}>
              <Category>สินค้าฟุ่มเฟือย</Category>
            </Grid>
            <Grid item xs={4}>
              <ExpenseType
                className={
                  Mockdata.expense_type === "income"
                    ? TypeIncomeColor
                    : TypeExpendColor
                }
              >
                รายจ่าย
              </ExpenseType>
            </Grid>
            <Grid item xs={8}>
              <Title>ค่าขนม</Title>
            </Grid>
            <Grid item xs={4}>
              <Total>{Currency(1000)}</Total>
            </Grid>

            <CardActions style={{ width: "100%", padding: "0" }}>
              <Grid container>
                <Grid item xs={8}>
                  <Date>วันศุกร์, 2021/2/5 - 01.56น</Date>
                </Grid>
                <Grid item xs={4}>
                  <div style={{ textAlign: "right" }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<EditIcon />}
                      style={{ marginRight: rhythm(1) }}
                      size="small"
                    >
                      แก้ไขรายการ
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<DeleteIcon />}
                      size="small"
                    >
                      ลบรายการ
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </CardActions>
          </Grid>
        </CardContent>
      </Card>
    </ContainerCenter>
  );
}
export default ExpenseCard;
