export async function generateMetadata() {
  return {
    title: "Managed Democracy",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <header className="p-6 flex items-center h-[96px] bg-surface-container-highest">
        <div className="text-xl">Managed Democracy</div>
        <div className="absolute top-4 h-[72px] inset-0 mx-auto w-[720px]">
          <PromptBar />
        </div>
      </header>
      {children}
    </div>
  );
}

function PromptBar() {
  return (
    <textarea className="w-full bg-surface-container-high p-4 text-on-surface-variant rounded-[28px] resize-none h-[56px]">
    </textarea>
  );
}