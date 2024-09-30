import { Slider, Services, BookSlider, HeadingTitle} from '../../components';

import { books } from '../../data/books'

const HomePage = () => {
  return (
    <div className="home">
      <Slider />
      <Services />
      <HeadingTitle title={"Most Gifted"} />
      <BookSlider data={books} />
      <HeadingTitle title={"Best Seller"} />
      <BookSlider data={books} />
    </div>
  );
};

export default HomePage;
