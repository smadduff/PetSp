from django import forms
from django.forms import ModelForm, fields, Form
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Categoria, Producto, Bodega, Perfil

form_hidden = {'class': 'd-none'}
form_select = {'class': 'form-select'}
form_control = {'class': 'form-control'}
form_text_area = {'class': 'form-control', 'rows': '3'}
form_file = {'class': 'form-control-file', 'title': 'Debe subir una imagen'}
form_check = {'class': 'form-check-input'}
form_password = {'class': 'form-control text-danger', 'value': '123'}

class ProductoForm(ModelForm):    
    class Meta:
        model = Producto
        fields = '__all__'

        widgets = {
            'categoria': forms.Select(attrs=form_select),
            'nombre': forms.TextInput(attrs=form_control),
            'descripcion': forms.Textarea(attrs=form_text_area),
            'precio': forms.NumberInput(attrs=form_control),
            'descuento_subscriptor': forms.NumberInput(attrs=form_control),
            'descuento_oferta': forms.NumberInput(attrs=form_control),
            'imagen': forms.FileInput(attrs=form_file),
        }



class ActualizacionClienteForm(ModelForm):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']

    rut = forms.CharField(max_length=15, required=False, label='RUT', widget=forms.TextInput(attrs=form_control))
    direccion = forms.CharField(max_length=400, required=False, label='Dirección', widget=forms.Textarea(attrs=form_text_area))
    subscrito = forms.BooleanField(required=False, label='Subscrito', widget=forms.CheckboxInput(attrs=form_check))
    imagen = forms.CharField(required=False, label='Imagen', widget=forms.FileInput(attrs=form_file))

class PerfilForm(ModelForm):
    username = forms.CharField(max_length=150, label='Nombre de usuario')
    first_name = forms.CharField(max_length=30, label='Nombre')
    last_name = forms.CharField(max_length=150, label='Apellido')
    email = forms.EmailField(label='Correo electrónico')

    class Meta:
        model = Perfil
        fields = '__all__'
        widgets = {
            'usuario': forms.TextInput(attrs=form_select),
            'tipo_usuario': forms.TextInput(attrs=form_select),
            'rut': forms.TextInput(attrs=form_control),
            'direccion': forms.Textarea(attrs=form_text_area),
            'subscrito': forms.CheckboxInput(),
            'imagen': forms.FileInput(attrs=form_file),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].initial = self.instance.usuario.username
        self.fields['first_name'].initial = self.instance.usuario.first_name
        self.fields['last_name'].initial = self.instance.usuario.last_name
        self.fields['email'].initial = self.instance.usuario.email

    def save(self, commit=True):
        instance = super().save(commit=False)
        instance.usuario.username = self.cleaned_data['username']
        instance.usuario.first_name = self.cleaned_data['first_name']
        instance.usuario.last_name = self.cleaned_data['last_name']
        instance.usuario.email = self.cleaned_data['email']
        if commit:
            instance.usuario.save()
            instance.save()
        return instance


class BodegaForm(forms.Form):

    categoria = forms.ModelChoiceField(
        queryset=Categoria.objects.all(),
        widget=forms.Select(attrs=form_select),
        label='Categoría'
    )
    producto = forms.ModelChoiceField(
        queryset=Producto.objects.none(), 
        widget=forms.Select(attrs=form_select),
        label='Producto'
    )
    cantidad = forms.IntegerField(
        widget=forms.NumberInput(attrs=form_control),
        label='Cantidad'
    )

    class Meta:
        fields = '__all__'


class RegistroClienteForm(UserCreationForm):

    rut = forms.CharField(
        max_length=15, 
        required=True, 
        label='RUT',
        widget=forms.TextInput(attrs=form_control),
    )
    direccion = forms.CharField(
        max_length=400, 
        required=True, 
        label='Dirección',
        widget=forms.Textarea(attrs=form_text_area),
    )
    subscrito = forms.BooleanField(
        required=False,
        label='Subscrito',
        widget=forms.CheckboxInput(attrs=form_check),
    )
    imagen = forms.CharField(
        required=True,
        label='Imagen',
        widget=forms.FileInput(attrs=form_file),
    )
    
    class Meta:
        model = User
        fields = [
            'username', 
            'first_name', 
            'last_name', 
            'email', 
            'rut', 
            'direccion', 
            'subscrito', 
            'imagen', 
            'password1', 
            'password2'
        ]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].widget.attrs.update(form_control)
        self.fields['first_name'].widget.attrs.update(form_control)
        self.fields['last_name'].widget.attrs.update(form_control)
        self.fields['email'].widget.attrs.update(form_control)
        self.fields['password1'].widget.attrs.update(form_control)
        self.fields['password2'].widget.attrs.update(form_control)


class IngresarForm(Form):
    username = forms.CharField(widget=forms.TextInput(attrs=form_control), label="Cuenta")
    password = forms.CharField(widget=forms.PasswordInput(attrs=form_control), label="Contraseña")
    class Meta:
        fields = ['username', 'password']

