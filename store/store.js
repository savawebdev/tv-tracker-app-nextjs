import create from 'zustand';

const createLoadingSlice = (set, get) => ({
  loading: false,
  setLoading: () => set((prev) => ({ loading: !prev.loading })),
});

const createAlertSlice = (set, get) => ({
  alertType: '',
  setAlertType: (newType) => set((prev) => ({ alertType: newType })),
  alertMessage: '',
  setAlertMessage: (newMessage) =>
    set((prev) => ({ alertMessage: newMessage })),
});

const useStore = create((set, get) => ({
  ...createLoadingSlice(set, get),
  ...createAlertSlice(set, get),
}));

export default useStore;
