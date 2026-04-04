import React from 'react';
import type { SvgProps } from 'react-native-svg';
import { Path, Rect, Svg } from 'react-native-svg';

export function ThemeLightIcon(props: SvgProps) {
	return (
	<Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
		<Rect width={18} height={10} x={3} y={7} fill="currentColor" rx={2} ry={2}></Rect>
		<Path fill="currentColor" d="M7.87 6L5.4 2.7l-.8.6L6.63 6zm3.63-4h1v4h-1zm7.9 1.3l-.8-.6L16.13 6h1.24zM16.13 18l2.47 3.3l.8-.6l-2.03-2.7zm-4.63 0h1v4h-1zm-6.9 2.7l.8.6L7.87 18H6.63z"></Path>
	</Svg>
);
}