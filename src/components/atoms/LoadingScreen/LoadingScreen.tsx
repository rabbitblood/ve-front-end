import loadingIcon from "@/assets/loading.svg";

const LoadingScreen = () => (
  <div className="loading-screen">
    <img src={loadingIcon} alt="loading" />
    <p>Loading...</p>
  </div>
);

export default LoadingScreen;
