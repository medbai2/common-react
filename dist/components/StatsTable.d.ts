/**
 * StatsTable component for displaying user statistics
 * Specialized component for the Hello project
 */
import React from 'react';
export interface UserStats {
    name: string;
    title?: string;
    count: number;
    lastHelloAt: string;
}
export interface StatsTableProps {
    data: UserStats[];
    className?: string;
}
export declare const StatsTable: React.FC<StatsTableProps>;
//# sourceMappingURL=StatsTable.d.ts.map