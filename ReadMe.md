# Easy Class 🎓 
A simple way to map css classes for react components similar to how the Angular `[ngClass]` directive works.


```
npm install easy-class
```

## How-to-use ⚙️
```typescript
import { classlist } from 'easy-class';

const MyComponent = () => {
	const [loading, setLoading] = useState(false);

	return (
		<div className={classlist(
			styles.AuthPage,
			loading && styles.AuthPage__loading
		)}>
			MyComponent Works
			<button onClick={() => setLoading(!loading)}>Login</button>
		</div>
	);
};
```