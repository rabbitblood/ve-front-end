function scrollToElement(prductId: string) {
  const element = document.getElementById(prductId);
  element?.scrollIntoView({ behavior: "smooth" });
}

export { scrollToElement };
