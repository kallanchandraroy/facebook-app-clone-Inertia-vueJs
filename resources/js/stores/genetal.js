//New Add for Define Store Pinia

import { defineStore } from "pinia";

export const useGenaralStore = defineStore("general", {
    state: () => ({
        isPostOverlay: false,
        isCropperModal: false,
        isImageDisplay: null,
    }),
    persist: true,
});
