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
        margin: '4rem 6.5rem',
        fontSize: 128
      }}
    >
      <p style={{margin: 0}}>{numberPage}</p>
    </div>
  );
};
