// action types
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";


// action creators
export function changeLanguage(isRTL) {
    return {
      type: CHANGE_LANGUAGE,
      isRTL
    }
} 