'use client';

import * as React from 'react';
import * as runtime from 'react/jsx-runtime';

/**
 * MDX Content component to render compiled MDX from Velite
 */
interface MDXContentProps {
    code: string;
    components?: Record<string, React.ComponentType<any>>;
}

export function MDXContent({ code, components }: MDXContentProps) {
    // Evaluate the compiled MDX code
    const Component = React.useMemo(() => {
        const fn = new Function(code);
        return fn({ ...runtime }).default;
    }, [code]);

    return (
        <div className="mdx">
            <Component components={components} />
        </div>
    );
}
