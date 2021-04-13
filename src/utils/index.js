// récupérer l'id le plus haut d'un tableau
// dans le tableau on a des objets qui ont une propriété id
// eslint-disable-next-line import/prefer-default-export
export const getHighestId = (dataArray) => {
  // récupération de l'id de chaque élément du tableau
  const tabIds = dataArray.map((task) => task.id);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  const idMax = Math.max(...tabIds);

  // Math.max(...tabIds)
  // c'est l'équivalent de Math.max(tabIds[0], tabIds[1], etc)
  // ... = spread operator, on déverse chaque élément du tableau
  return idMax;
};
