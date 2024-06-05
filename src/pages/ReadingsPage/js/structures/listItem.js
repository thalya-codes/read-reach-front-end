import { createStars } from "./stars.js";

export const createListItemStructure = ({
  id,
  title,
  author,
  start_date,
  end_date,
  rating,
}) => {
  const formatted_start_date = new Intl.DateTimeFormat("pt-BR").format(
    new Date(start_date)
  );

  const formatted_end_date = new Intl.DateTimeFormat("pt-BR").format(
    new Date(end_date)
  );

  const stars = createStars(rating);

  return `                
      <li class="reading-list__item card-read-reach"  data-id="${id}" >
          <div>
              <h3 class="main-orange-text">Título</h3>
              <p>${title}</p>
          </div>
  
          <div>
              <h3 class="main-orange-text">Autor</h3>
              <p>${author}</p>
          </div>
  
          <div>
              <h3 class="main-orange-text">Início</h3>
              <p>${formatted_start_date}</p>
          </div>
  
          <div>
              <h3 class="main-orange-text">Fim</h3>
              <p>${formatted_end_date}</p>
          </div>
  
          <div class="d-flex justify-content-between">
              <div>
                  <h3 class="main-orange-text">Avaliação</h3>
                  ${stars}
              </div>
  
              <button id="delete-reading-btn"  type="button" class="reading-list__item-delete-btn" aria-label="Excluir leitura" onclick="handleDeleteReading(${id})">
                  <img src="../../assets/trash.png" clas="reading-list__item-img--trash" alt="">
              </button>
          </div>
      </li>
      `;
};
