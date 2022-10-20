import SmallCard from './SmallCard';

const ExploreCards = ({ exploreData }) => {
  return (
    <section className='pt-8'>
      <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {exploreData?.map((item, idx) => (
          <SmallCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ExploreCards;
