import React from 'react';
import useStoryStore from '@/store/useStoryStore';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const SuccessStories = () => {
  const { stories } = useStoryStore();

  if (!stories.length) return <div>Loading...</div>;

  return (
    <div className="p-5 ">
      <h1 className="text-3xl font-bold mb-4">Success Stories</h1>
      <Carousel className="w-full max-w-md">
        <CarouselContent>
          {stories.map((story, index) => (
            <CarouselItem key={index}>
              <div className="p-2">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full mb-3"
                    />
                    <h3 className="text-xl font-semibold">{story.name}</h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-4">
                      {story.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

     
  
    </div>
  );
};

export default SuccessStories;


/*

    <Carousel className="w-full max-w-md">
        <CarouselContent>
          {stories.map((story, index) => (
            <CarouselItem key={index}>
              <div className="p-2">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full mb-3"
                    />
                    <h3 className="text-xl font-semibold">{story.name}</h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-4">
                      {story.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

*/