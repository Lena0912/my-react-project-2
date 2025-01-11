import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 2px solid black; /* Чорна межа */
  border-radius: 8px; /* Заокруглені кути */
  margin-bottom: 10px; /* Відступ між карточками */
  box-shadow: 0 0 5px 2px grey, 0 0 8px 3px green; /* Ефекти з двома кольорами */
  max-width: 500px; /* Ширина для обмеження */
`;
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column; /* Вертикальне вирівнювання для імені та номера */
  gap: 10px; /* Відступ між ім'ям і номером */
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const DeleteButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
`;