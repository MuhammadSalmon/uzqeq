import * as React from "react";

export const Sheet: React.FC<{ children: React.ReactNode }> = ({ children }) => <div>{children}</div>;
export const SheetContent: React.FC<{ children: React.ReactNode; side?: string; className?: string }> = ({ children, className }) => (
  <div className={className}>{children}</div>
);
export const SheetTrigger: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <button className={className}>{children}</button>
);