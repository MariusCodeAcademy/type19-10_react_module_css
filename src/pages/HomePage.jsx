import Card from '../components/UI/Card';

export default function HomePage() {
  return (
    <div className='container'>
      <h1>HomePage</h1>
      <Card name={'This is cards name'} />
      <button className='btn'>Read more</button>
    </div>
  );
}
