import { theme } from "@/styles/theme";
import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

import { handleAvatar } from "@/api/user";

export default function UserSection({
  user,
  handleDeleteUser,
}: {
  user: GroupSetUer;
  handleDeleteUser: (nickname: string) => void;
}) {
  return (
    <Container>
      <CloseIcon
        className="close"
        onClick={() => handleDeleteUser(user.nickname)}
      />
      <ProfileBox>
        <ProfileImg src={handleAvatar(user.profileImageType)} />
      </ProfileBox>
      <p>{user.nickname}</p>
      {user.email}
    </Container>
  );
}

const ProfileBox = styled.div`
  width: 13rem;
  height: 13rem;
  border-radius: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background};
`;

const Container = styled.div`
  width: 13%;
  margin-right: 1rem;
  background-color: ${theme.colors.containerLight};
  border-radius: 1rem;
  padding: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .close {
    font-size: 2rem;
    float: right;
    margin-left: auto;

    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.3);
    }
  }

  p {
    font-size: 2rem;
    color: ${theme.colors.pink};
  }
`;

const ProfileImg = styled.img`
  width: 6.3rem;
`;