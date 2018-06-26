import R from 'ramda';

export function onDrag(event, gestureState) {
  const { initialStyles } = this;
  const { draggable } = this.props;

  const isObject = R.is(Object, draggable);

  let left = (isObject ? draggable.x : draggable)
    ? initialStyles.left + gestureState.dx
    : initialStyles.left;

  let top = (isObject ? draggable.y : draggable)
    ? initialStyles.top + gestureState.dy
    : initialStyles.top;

  if (draggable.bounds) {
    if (left < draggable.bounds.minX) {
      left = draggable.bounds.minX;
    } else if (left > draggable.bounds.maxX) {
      left = draggable.bounds.maxX;
    }

    if (top < draggable.bounds.minY) {
      top = draggable.bounds.minY;
    } else if (top > draggable.bounds.maxY) {
      top = draggable.bounds.maxY;
    }
  }

  this.dragStyles = { left, top };
}
