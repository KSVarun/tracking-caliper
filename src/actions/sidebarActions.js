export const SidebarActionTypes = {
  OPEN_OPTION: 'SIDEBAR.OPEN_OPTION'
};

export function openOption(id) {
  return {
    type: SidebarActionTypes.OPEN_OPTION,
    payload: {
      id
    }
  };
}
