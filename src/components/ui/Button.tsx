import Border from './Borders'; // نفس الاسم

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <Border className="hover:bg-emerald-600/20 transition-colors duration-300">
      <button>{children}</button>
    </Border>
  );
};

export default Button;
