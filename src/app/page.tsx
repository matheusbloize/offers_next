import Category from "@/components/pages/home/Category";

const Home = () => {
  return (
    <main className="flex flex-col p-4 gap-12">
      <Category title="hoteis" />
      <Category title="entretenimento" />
      <Category title="gastronomia" />
    </main>
  );
};

export default Home;
