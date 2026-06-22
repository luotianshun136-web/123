type DisclaimerProps = {
  text: string;
};

export default function Disclaimer({ text }: DisclaimerProps) {
  return (
    <footer className="disclaimer" aria-label="免责声明">
      {text}
    </footer>
  );
}
