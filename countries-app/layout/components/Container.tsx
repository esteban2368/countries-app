interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-8xl mx-auto px-5 py-8 sm:px-6 lg:px-8">
        {children}
    </div>
  );
}