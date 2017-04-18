function pack(big, small, goal) {

  goal = goal - (big * 5);
  if (goal < 0) return goal ? -1 : 0;

  small = small - goal;
  return (small >= 0) ? small : -1;
}
