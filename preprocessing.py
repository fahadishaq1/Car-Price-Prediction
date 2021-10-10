import numpy as np
import pickle

# Load all encoders
Condition_encoder = pickle.load(open('encoder_condition.pkl', 'rb'))
Vehicle_brand_encoder = pickle.load(open('encoder_vehicle_brand.pkl', 'rb'))
Vehicle_model_encoder = pickle.load(open('encoder_vehicle_mdoel.pkl', 'rb'))
Fuel_type_encoder = pickle.load(open('encoder_fuel_type.pkl', 'rb'))
Drive_encoder = pickle.load(open('encoder_drive.pkl', 'rb'))
Transmission_encoder = pickle.load(open('encoder_transmission.pkl', 'rb'))
Type_encoder = pickle.load(open('encoder_type.pkl', 'rb'))


def encode(entered_values):

    Production_year = int(entered_values[0])
    Power_HP = int(entered_values[1])
    Mileage_km = int(entered_values[2])
    Displacement_cm3 = int(entered_values[3])
    Condition = entered_values[4]
    Vehicle_brand = entered_values[5]
    Vehicle_model = entered_values[6]
    Fuel_type = entered_values[7]
    Drive = entered_values[8]
    Transmission = entered_values[9]
    Type = entered_values[10]

    # Numerical Features

    # 1- Production_year
    if Production_year != '' and Production_year != ' ':
        Production_year = Production_year
    else:
        Production_year = np.nan

    # 2- Power_HP
    if Power_HP != '' and Power_HP != ' ':
        Power_HP = Power_HP
    else:
        Power_HP = np.nan

    # 3- Mileage_km
    if Mileage_km != '' and Mileage_km != ' ':
        Mileage_km = Mileage_km
    else:
        Mileage_km = np.nan
        
    # 4- Displacement_cm3
    if Displacement_cm3 != '' and Displacement_cm3 != ' ':
        Displacement_cm3 = Displacement_cm3
    else:
        Displacement_cm3 = np.nan

        
    # Categorical Features

    #1- Condition
    if Condition != '' and Condition != ' ':
        Condition_lower_case =  np.array(Condition.lower()).ravel().reshape(-1, 1)
        Condition_encoded = Condition_encoder.transform(Condition_lower_case)[0][0]
    else:
        Condition_encoded = np.nan

    #2- Vehicle_brand
    if Vehicle_brand != '' and Vehicle_brand != ' ':
        Vehicle_brand_lower_case =  np.array(Vehicle_brand.lower()).ravel().reshape(-1, 1)
        Vehicle_brand_encoded = Vehicle_brand_encoder.transform(Vehicle_brand_lower_case)[0][0]
    else:
        Vehicle_brand_encoded = np.nan

    #3- Vehicle_model
    if Vehicle_model != '' and Vehicle_model != ' ':
        Vehicle_model_lower_case =  np.array(Vehicle_model.lower()).ravel().reshape(-1, 1)
        Vehicle_model_encoded = Vehicle_model_encoder.transform(Vehicle_model_lower_case)[0][0]
    else:
        Vehicle_model_encoded = np.nan

    #4- Fuel_type
    if Fuel_type != '' and Fuel_type != ' ':
        Fuel_type_lower_case =  np.array(Fuel_type.lower()).ravel().reshape(-1, 1)
        Fuel_type_encoded = Fuel_type_encoder.transform(Fuel_type_lower_case)[0][0]
    else:
        Fuel_type_encoded = np.nan

    #5- Drive
    if Drive != '' and Drive != ' ':
        Drive_lower_case =  np.array(Drive.lower()).ravel().reshape(-1, 1)
        Drive_encoded = Drive_encoder.transform(Drive_lower_case)[0][0]
    else:
        Drive_encoded = np.nan

    #6- Transmission
    if Transmission != '' and Transmission != ' ':
        Transmission_lower_case =  np.array(Transmission.lower()).ravel().reshape(-1, 1)
        Transmission_encoded = Transmission_encoder.transform(Transmission_lower_case)[0][0]
    else:
        Transmission_encoded = np.nan

    #7- Type
    if Type != '' and Type != ' ':
        Type_lower_case =  np.array(Type.lower()).ravel().reshape(-1, 1)
        Type_encoded = Type_encoder.transform(Type_lower_case)[0][0]
    else:
        Type_encoded = np.nan

    encoded_values = np.array([Production_year, Power_HP, Mileage_km, Displacement_cm3, 
                                Condition_encoded, Vehicle_brand_encoded, Vehicle_model_encoded, 
                                Fuel_type_encoded, Drive_encoded, Transmission_encoded, Type_encoded])

    return encoded_values