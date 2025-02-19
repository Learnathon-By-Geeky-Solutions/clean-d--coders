import React from 'react';
import useStoryStore from '@/store/useStoryStore';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const SuccessStories = () => {
  const { stories } = useStoryStore();

  if (!stories.length) return <div>Loading...</div>;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">Success Stories</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full h-1/3 max-w-full"
      >
        <CarouselContent>
          {stories.map((story, index) => (
            <CarouselItem key={story.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className = 'shadow-lg'>
                  <CardContent className="flex flex-col aspect-video p-6">
                    <div className='flex items-center justify-start m-4'>
                    <img
                      src={story.image}
                      alt={story.name}
                      className="size-16 rounded-full border-4 border-gray-300"
                    />
                    <h3 className="text-lg font-semibold ml-2">{story.name}</h3>

                    </div>
                  
                    <p className="text-gray-600 text-md mt-2 line-clamp-4">
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