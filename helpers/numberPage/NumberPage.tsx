interface Props {
    numberPage: string
}

export const NumberPage = ({ numberPage }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        bottom: 0,
      }}
    >
      <p>{numberPage}</p>
    </div>
  );
};
