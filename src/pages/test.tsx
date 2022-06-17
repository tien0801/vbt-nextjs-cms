// import { MainLayout } from '@/components/layout';
import * as React from 'react';
import { Counter } from 'src/features/counter';

export interface TestProps {
}

export default function Test(props: TestProps) {
    return (
        <div>
            <Counter />
        </div>
    );
}

// Test.Layout = MainLayout
