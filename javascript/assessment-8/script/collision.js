export function collision(first, second) {
  if (
    first.x + first.width > second.x &&
    first.x < second.x + second.width &&
    first.y + first.width > second.y &&
    first.y < second.y + second.height
  ) {
    return true;
  }
}
