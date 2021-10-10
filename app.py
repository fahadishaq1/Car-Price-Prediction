from flask import Flask, render_template, url_for, request, redirect
import pickle
import preprocessing

app = Flask(__name__)
model = pickle.load(open('lgbm_quick_model.pkl', 'rb'))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # get the car details from the form
    car_details = list(request.form.values())
    # preprocess the car details
    car_details_processed = preprocessing.encode(car_details)
    # predict the car price 
    car_price = model.predict(car_details_processed)
    # round the price value
    car_price = round(car_price[0])
    
    return render_template('index.html', prediction_text=f'The price of {car_details[4]} {car_details[9]} {car_details[8]} {car_details[7]} {car_details[0]} 
                                        {car_details[5].capitalize()} {car_details[6].capitalize()} {car_details[1]} {car_details[3]} {car_details[10]
                                        with a mileage of {car_details[2]}km should be {car_price:,} Polish zloty')
   
if __name__ == '__main__':
    app.run(debug=True)
