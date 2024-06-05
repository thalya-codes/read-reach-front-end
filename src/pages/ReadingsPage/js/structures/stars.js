export const createStars = (rating) => {
  let i = 0;
  const stars = [];

  while (i < rating) {
    i++;
    stars.push(
      "<img src='../../assets/star.png' class='reading-list__item-img--star' title='${rating} estrela(s)' aria-label='${rating} estrela(s)' alt=''>"
    );
  }

  return stars.join(" ");
};
