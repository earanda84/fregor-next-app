import { Card } from 'flowbite-react';


export default function CardBody({categories}) {

  return (
    <>
      {categories?.map((categorie) => (
        <Card className='mb-10 md:mb-0' key={categorie.id} imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-500 dark:text-white">
          {categorie.name}
        </h5>
        <p className="font-normal text-gray-400 dark:text-gray-400">
          {categorie.description}
        </p>
      </Card>
       ))}
            
    </>
  )
}
