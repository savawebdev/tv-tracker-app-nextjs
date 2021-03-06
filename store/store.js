import create from 'zustand';

const createLoadingSlice = (set, get) => ({
  loading: false,
  setLoading: () => set((prev) => ({ loading: !prev.loading })),
});

const createAlertSlice = (set, get) => ({
  showAlert: false,
  alertType: 'info',
  alertMessage: 'Please wait...',
  setShowAlert: () => set((prev) => ({ showAlert: !prev.showAlert })),
  setAlertType: (newType) => set((prev) => ({ alertType: newType })),
  setAlertMessage: (newMessage) =>
    set((prev) => ({ alertMessage: newMessage })),
});

const createShowsSlice = (set, get) => ({
  shows: [],
  setShows: (showsArray) => set((prev) => ({ shows: showsArray })),
  addShow: (show) => set((prev) => ({ shows: [...prev.shows, show] })),
  removeShow: (id) =>
    set((prev) => ({ shows: prev.shows.filter((show) => show.id !== id) })),
});

const useStore = create((set, get) => ({
  ...createLoadingSlice(set, get),
  ...createAlertSlice(set, get),
  ...createShowsSlice(set, get),
}));

export default useStore;
