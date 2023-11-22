from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from sqlalchemy import create_engine
import pandas as pd


# Create your views here.
def pokedex(request):
    conx = create_engine('mysql://root:@localhost/newapp')
    df = pd.read_sql_table('pokemons', conx)
    print(df)
    return HttpResponse(df.to_json(index=False, orient='table'))
