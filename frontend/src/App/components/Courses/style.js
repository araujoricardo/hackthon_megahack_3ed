import styled from "styled-components";

export const WrapperCurso = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 8px;
  padding: 8px;
`;

export const CourseCard = styled.div`
  background-color: #1e839d;
  border-radius: 8px;
  padding: 8px;
  opacity: 70%;
  display: grid;
  align-items: flex-start;
  justify-items: center;
  font-size: 16px;
  height: 240px;
`;

export const CourseCard2 = styled(CourseCard)`
  background-color: #145a6b;
`;
export const CourseCard3 = styled(CourseCard)`
  background-color: #9f9e7c;
`;
export const CourseCard4 = styled(CourseCard)`
  background-color: #d13713;
`;

export const CardTitle = styled.div`
  color: white;
  padding: 8px;
  border-radius: 50%;
  font-weight: bold;
  border: white solid 2px;
  text-align: center;
`;
export const CourseName = styled.h1`
  font-size: 16px;
  color: white;
  text-align: center;
`;
export const Status = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  > p {
    margin-left: 8px;
    font-weight: bold;
  }

  > svg {
    width: 24px;
    height: 24px;
  }
`;
export const Button = styled.button`
  width: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  color: white;
`;
