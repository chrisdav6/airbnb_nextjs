import LargeCard from './LargeCard';

const LiveAnywhere = ({ liveData }) => {
  return (
    <section className='pt-8'>
      <h2 className='text-4xl font-semibold pb-5'>Live Anywhere</h2>

      <div className='flex space-x-5 overflow-scroll scrollbar-hide p-3 -ml-3'>
        {liveData?.map((item, idx) => (
          <LargeCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
};

export default LiveAnywhere;
