// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Rewiews[]>
) {

  const cards = [
    {
      id: "1",
      name: "Festa da Espuma",
      date: "8 de Abril",
      city: "Alfenas, MG",
      author: "pepe",
      score: 4.5,
      image:
        "https://aideiadigital.com.br/wp-content/uploads/2019/10/Flyer-de-festa-eletronica-para-editar.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet scelerisque metus, sed dignissim eros. Aliquam euismod, nisi non volutpat dapibus, ipsum leo elementum purus, iaculis sollicitudin purus erat id justo. Sed consequat eleifend auctor. In feugiat malesuada sem at sodales. Nunc convallis porttitor laoreet. Nulla non pretium quam. Phasellus facilisis facilisis efficitur.",
    },
    {
      id: "2",
      name: "Biotecquila",
      date: "3 de Maio",
      city: "Alfenas, MG",
      author: "jasjas",
      score: 4,
      image:
        "https://aideiadigital.com.br/wp-content/uploads/2019/10/Flyer-tema-festa-no-ver%C3%A3o.jpg",
      description: "This is the second card",
    },
    {
      id: "3",
      name: "Federal Fantasy",
      date: "23 de Junho",
      city: "Alfenas, MG",
      author: "isinha",
      score: 3.5,
      image:
        "https://aideiadigital.com.br/wp-content/uploads/2019/10/Flyer-de-festa-tropical-com-dj.jpg",
      description: "This is the third card",
    },
    {
      id: "4",
      name: "Quimicalourada",
      date: "17 de Julho",
      city: "Alfenas, MG",
      author: "fadawinx",
      score: 5,
      image:
        "https://aideiadigital.com.br/wp-content/uploads/2019/10/flyer-de-festa-de-anivers%C3%A1rio.jpg",
      description: "This is the fourth card",
    },
    {
      id: "5",
      name: "Pancadão da Coqueiro",
      date: "12 de Agosto",
      city: "Alfenas, MG",
      author: "brunafalcucci",
      score: 4.5,
      image:
        "https://aideiadigital.com.br/wp-content/uploads/2019/10/flyer-de-festa-tema-Halloween.jpg",
      description: "This is the fifth card",
    },
    {
      id: "6",
      name: "Integra Bixo",
      date: "20 de Setembro",
      city: "Alfenas, MG",
      author: "rolezeira123",
      score: 2,
      image:
        "https://i.pinimg.com/564x/9c/01/c7/9c01c7483c6fc7c6522a8a0291a34264.jpg",
      description: "This is the sixth card",
    },
    {
      id: "7",
      name: "Desumanas",
      date: "20 de Setembro",
      city: "Alfenas, MG",
      author: "rolezeira123",
      score: 1,
      image:
        "https://i.pinimg.com/564x/9c/01/c7/9c01c7483c6fc7c6522a8a0291a34264.jpg",
      description: "This is the sixth card",
    },
  ];

  res.status(200).json(cards)
}
