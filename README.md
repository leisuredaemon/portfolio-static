# Static Portfolio Site

## 🚀 How to Test the Static Site

### **Method 1: Open in Browser**
1. Navigate to the `static_version` folder
2. Double-click on `index.html` to open it in your default browser
3. Click on any project card to test the modal functionality

### **Method 2: Test with Debug Console**
1. Open `test.html` in your browser
2. Open Developer Tools (F12)
3. Go to Console tab
4. Click the test buttons to see debug output
5. Check if projects are loading correctly

### **Method 3: Local Server (Recommended)**
If you have Python installed:
```bash
cd static_version
python -m http.server 8000
```
Then open: http://localhost:8000

Or if you have Node.js:
```bash
cd static_version
npx http-server
```

## 🔧 Debug Information

The site now includes console logging to help debug issues:
- Check browser console for project loading status
- Modal function logs when projects are found/not found
- Error handling for modal display issues

## 📁 Files
- `index.html` - Main portfolio page
- `styles.css` - All styling
- `script.js` - JavaScript functionality
- `test.html` - Simple test page for debugging

## ✅ Expected Behavior
- All project cards should be clickable
- Modal should open with detailed project information
- Markdown content should render properly
- Navigation should work smoothly
- All projects should be visible in their respective sections

## 🐛 If Issues Persist
1. Check browser console for error messages
2. Verify all files are in the same directory
3. Try opening in a different browser
4. Check if JavaScript is enabled in your browser
