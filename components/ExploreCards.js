import SmallCard from './SmallCard';

const ExploreCards = ({ exploreData }) => {
  return (
    <section className='pt-6'>
      <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

      {exploreData?.map((item, idx) => (
        <SmallCard key={idx} item={item} />
      ))}
    </section>
  );
};

export default ExploreCards;
