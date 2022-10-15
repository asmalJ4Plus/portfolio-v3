import $ from 'jquery';

/**
 * Scroll to top of element
 * @param id element id
 */
export const scrollTo = (id: string) => {
  $('html,body').animate(
    {
      scrollTop: $(id).offset()?.top,
    },
    'slow',
  );
};

/**
 *
 * @param id element id
 * @param nextId next element id
 * @returns true if between the two elements
 */
export const isBetween = (id: string, nextId: string): boolean => {
  const documentTop = $(document).scrollTop();
  const idTop = $(id).offset()?.top;
  const nextIdTop = $(nextId).offset()?.top;
  const windowHeight = $(window).height();

  if (
    typeof documentTop === 'number' &&
    typeof idTop === 'number' &&
    typeof nextIdTop === 'number' &&
    typeof windowHeight === 'number'
  ) {
    return documentTop >= idTop - windowHeight / 2 && documentTop < nextIdTop - windowHeight / 2;
  }

  return false;
};
