export type PButtonProps = {
  buttonType?: 'primary' | 'secondary';
  text?: string;
  className?: string;
  disable?: boolean;
  onClick?: mouseEventHandler<HTMLButtonElement>;
};
