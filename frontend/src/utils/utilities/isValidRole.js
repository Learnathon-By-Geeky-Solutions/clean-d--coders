export const isValidRole = (userRoles, accessRoles) => {
  return (userRoles || []).some((r) => accessRoles.includes(r));
};
