import Image from "next/image";
export const ProfileImage = () => {
  return (
    <>
      <Image
        src={
          "/profile-displayphoto-shrink_800_800/0/1691474025658?e=1701302400&v=beta&t=On1NQxqYkDuhYO0WXC-AMRngeU_nsISZAChW6KByZjg"
        }
        width={400}
        height={400}
        alt="profile-image"
      />
    </>
  );
};
